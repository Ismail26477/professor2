import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format, addDays, isSameDay, isBefore, startOfDay } from "date-fns";
import { CalendarIcon, Clock, Globe, Check, ArrowRight } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const SLOTS = [
  "09:00", "10:00", "11:00", "12:00",
  "14:00", "15:00", "16:00", "17:00", "18:00",
];

// Curated, common timezones
const TIMEZONES = [
  "Pacific/Honolulu",
  "America/Los_Angeles",
  "America/Denver",
  "America/Chicago",
  "America/New_York",
  "America/Sao_Paulo",
  "Europe/London",
  "Europe/Berlin",
  "Africa/Johannesburg",
  "Asia/Dubai",
  "Asia/Kolkata",
  "Asia/Singapore",
  "Asia/Tokyo",
  "Australia/Sydney",
];

const SESSION_TYPES = [
  { id: "discovery", label: "Discovery Call", duration: "30 min" },
  { id: "studio", label: "Studio Booking", duration: "2 hr" },
  { id: "podcast", label: "Podcast Session", duration: "90 min" },
];

const guessTz = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return "UTC";
  }
};

const BookingCalendar = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>();
  const [slot, setSlot] = useState<string | undefined>();
  const [tz, setTz] = useState<string>(guessTz());
  const [type, setType] = useState<string>("discovery");
  const [submitting, setSubmitting] = useState(false);

  const userTz = useMemo(() => guessTz(), []);
  const tzOptions = useMemo(() => {
    const base = Array.from(new Set([userTz, ...TIMEZONES]));
    return base;
  }, [userTz]);

  // Disable past dates and Sundays
  const isDisabled = (d: Date) =>
    isBefore(d, startOfDay(new Date())) || d.getDay() === 0;

  // Pretend some slots are already booked (deterministic per date)
  const bookedSlots = useMemo(() => {
    if (!date) return new Set<string>();
    const seed = date.getDate() + date.getMonth();
    return new Set(SLOTS.filter((_, i) => (i + seed) % 4 === 0));
  }, [date]);

  const canSubmit = date && slot && tz && type && !submitting;

  const handleConfirm = async () => {
    if (!canSubmit) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    toast({
      title: "Session requested",
      description: `${SESSION_TYPES.find((s) => s.id === type)?.label} · ${format(date!, "EEE, MMM d")} at ${slot} (${tz}). We'll confirm by email.`,
    });
    setSlot(undefined);
  };

  return (
    <div className="border border-border bg-background">
      <div className="p-6 sm:p-8 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <CalendarIcon size={18} className="text-primary" />
          <h3 className="font-display text-2xl uppercase tracking-wide">
            Book a Session
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">
          Pick a date, time, and session type. We'll confirm within 24 hours.
        </p>
      </div>

      {/* Session type pills */}
      <div className="p-6 sm:p-8 border-b border-border">
        <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
          Session Type
        </span>
        <div className="grid grid-cols-3 gap-2">
          {SESSION_TYPES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setType(s.id)}
              className={cn(
                "p-3 text-left border transition-colors",
                type === s.id
                  ? "border-primary bg-primary/10"
                  : "border-border hover:border-primary/50"
              )}
            >
              <span className="block text-xs uppercase tracking-wider font-medium">
                {s.label}
              </span>
              <span className="block text-[11px] text-muted-foreground mt-0.5">
                {s.duration}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Date + Timezone */}
      <div className="grid sm:grid-cols-2 gap-px bg-border">
        <div className="p-6 sm:p-8 bg-background">
          <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Date
          </span>
          <Popover>
            <PopoverTrigger asChild>
              <button
                type="button"
                className={cn(
                  "w-full flex items-center justify-between border border-border px-4 py-3 hover:border-primary transition-colors text-left",
                  !date && "text-muted-foreground"
                )}
              >
                <span className="text-sm">
                  {date ? format(date, "EEE, MMM d, yyyy") : "Select a date"}
                </span>
                <CalendarIcon size={16} className="text-primary" />
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0 bg-background border-border"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={(d) => {
                  setDate(d);
                  setSlot(undefined);
                }}
                disabled={isDisabled}
                fromDate={new Date()}
                toDate={addDays(new Date(), 90)}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
          <p className="text-[11px] text-muted-foreground mt-2">
            Studio closed on Sundays.
          </p>
        </div>

        <div className="p-6 sm:p-8 bg-background">
          <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Timezone
          </span>
          <div className="relative">
            <select
              value={tz}
              onChange={(e) => setTz(e.target.value)}
              className="w-full appearance-none bg-background border border-border px-4 py-3 pr-10 text-sm hover:border-primary focus:border-primary outline-none transition-colors"
            >
              {tzOptions.map((z) => (
                <option key={z} value={z}>
                  {z.replace(/_/g, " ")}
                </option>
              ))}
            </select>
            <Globe
              size={16}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none"
            />
          </div>
          <p className="text-[11px] text-muted-foreground mt-2">
            Detected: {userTz.replace(/_/g, " ")}
          </p>
        </div>
      </div>

      {/* Time slots */}
      <div className="p-6 sm:p-8 border-t border-border">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Available Times
          </span>
          <Clock size={14} className="text-primary" />
        </div>

        <AnimatePresence mode="wait">
          {!date ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-sm text-muted-foreground py-8 text-center border border-dashed border-border"
            >
              Select a date to see available time slots
            </motion.p>
          ) : (
            <motion.div
              key={date.toISOString()}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-2"
            >
              {SLOTS.map((s) => {
                const booked = bookedSlots.has(s);
                const selected = slot === s;
                return (
                  <button
                    key={s}
                    type="button"
                    disabled={booked}
                    onClick={() => setSlot(s)}
                    className={cn(
                      "relative px-3 py-3 text-sm border transition-all",
                      booked &&
                        "border-border text-muted-foreground/40 line-through cursor-not-allowed",
                      !booked &&
                        !selected &&
                        "border-border hover:border-primary hover:text-primary",
                      selected &&
                        "border-primary bg-primary text-primary-foreground"
                    )}
                  >
                    {s}
                    {selected && (
                      <Check
                        size={12}
                        className="absolute top-1 right-1"
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Summary + confirm */}
      <div className="p-6 sm:p-8 border-t border-border bg-background-elevated/50">
        {date && slot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground mb-4"
          >
            <span className="text-foreground">
              {SESSION_TYPES.find((s) => s.id === type)?.label}
            </span>{" "}
            · {format(date, "EEE, MMM d")} at{" "}
            <span className="text-primary">{slot}</span>{" "}
            <span className="text-xs">({tz.replace(/_/g, " ")})</span>
          </motion.div>
        )}
        <button
          type="button"
          onClick={handleConfirm}
          disabled={!canSubmit}
          className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-primary-deep transition-colors disabled:opacity-40 disabled:cursor-not-allowed group"
        >
          {submitting ? "Reserving…" : "Confirm Booking"}
          {!submitting && (
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default BookingCalendar;
