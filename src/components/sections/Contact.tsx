import { useCallback, memo } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Instagram, Youtube, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import BookingCalendar from "./BookingCalendar";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

const Contact = memo(() => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>({
    mode: "onBlur",
    defaultValues: { name: "", email: "", service: "General Inquiry", message: "" }
  });

  const onSubmit = useCallback(async (data: FormData) => {
    try {
      await new Promise((r) => setTimeout(r, 600));
      toast({
        title: "Message received",
        description: `Thanks ${data.name.split(" ")[0]}, we'll be in touch within 24 hours.`,
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  }, [reset, toast]);

  return (
    <section id="contact" className="relative py-32 bg-background-elevated overflow-hidden">
      <div className="absolute left-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <p className="eyebrow mb-6">▸ Start a Project</p>
          <h2 className="display-lg text-balance">
            Let's Create Something <span className="text-primary">Cinematic.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <BookingCalendar />
        </motion.div>

        <div className="mb-12">
          <p className="eyebrow mb-4">▸ Or Send a Message</p>
          <h3 className="font-display text-3xl uppercase tracking-wide">
            Tell Us About Your Project
          </h3>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-16">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Name" error={errors.name?.message}>
                <input
                  {...register("name", { required: "Required", maxLength: 100 })}
                  className="field-input"
                  autoComplete="name"
                />
              </Field>
              <Field label="Email" error={errors.email?.message}>
                <input
                  type="email"
                  {...register("email", {
                    required: "Required",
                    pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
                  })}
                  className="field-input"
                  autoComplete="email"
                />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <Field label="Phone (optional)">
                <input
                  type="tel"
                  {...register("phone", { maxLength: 30 })}
                  className="field-input"
                  autoComplete="tel"
                />
              </Field>
              <Field label="Service Interest" error={errors.service?.message}>
                <select {...register("service", { required: "Required" })} className="field-input" defaultValue="">
                  <option value="" disabled>Select…</option>
                  <option>Feature Film Post-Production</option>
                  <option>Short Film</option>
                  <option>Audio Dubbing</option>
                  <option>Sound Design & Foley</option>
                  <option>Music Production</option>
                  <option>Corporate Film</option>
                  <option>Podcast Production</option>
                  <option>Animation</option>
                  <option>Other</option>
                </select>
              </Field>
            </div>
            <Field label="Message" error={errors.message?.message}>
              <textarea
                rows={5}
                {...register("message", { required: "Required", maxLength: 1500 })}
                className="field-input resize-none"
              />
            </Field>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-xs uppercase tracking-[0.3em] hover:bg-primary-deep transition-colors disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-10"
          >
            <div className="border border-border p-8 bg-background">
              <h3 className="font-display text-xl uppercase tracking-wide mb-6">Studio</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>Office No. 105, 106, 107, Mairah Enclave, Sr. No. 144, Canal Road, Near Bharat Petroleum, Warje, Pune – 411058</span>
                </li>
                <li className="flex gap-3">
                  <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                  <span>+91 91300 00379 <span className="text-foreground/60">— Aditya Deshmukh (Studio)</span></span>
                </li>
                <li className="flex gap-3">
                  <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                  <a href="mailto:info.mediaworksstudio@gmail.com" className="hover:text-primary">info.mediaworksstudio@gmail.com</a>
                </li>
              </ul>
            </div>



            <div className="border border-border p-8 bg-background">
              <h3 className="font-display text-xl uppercase tracking-wide mb-6">Follow</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mediaworksstudio9/" },
                  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UCJOLCg6CSMi6fCndoj6aMqw" },
                  { Icon: MessageCircle, label: "Facebook", href: "https://www.facebook.com/mediaworksstudio/" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <style>{`
        .field-input {
          width: 100%;
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          color: hsl(var(--foreground));
          padding: 0.875rem 1rem;
          font-size: 0.95rem;
          transition: border-color 0.2s;
          outline: none;
        }
        .field-input:focus {
          border-color: hsl(var(--primary));
        }
        select.field-input {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none' stroke='%23E8873A' stroke-width='2'%3E%3Cpath d='M1 1l5 5 5-5'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }
      `}</style>
    </section>
  );
});

Contact.displayName = "Contact";

const Field = memo(({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">{label}</span>
    {children}
    {error && <span className="block text-xs text-destructive mt-1" role="alert">{error}</span>}
  </label>
));

Field.displayName = "Field";

export default Contact;
