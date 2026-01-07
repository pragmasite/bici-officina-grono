import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Business hours from the data
  const schedule = [
    { hours: "08:30 - 12:00, 14:00 - 18:00" }, // Monday
    { hours: "08:30 - 12:00, 14:00 - 18:00" }, // Tuesday
    { hours: t.hours.closed }, // Wednesday
    { hours: "08:30 - 12:00, 14:00 - 18:00" }, // Thursday
    { hours: "08:30 - 12:00, 14:00 - 18:00" }, // Friday
    { hours: t.hours.closed }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = new Date().getDay();
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="orari" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <div className="mb-8 text-center">
            <span className="text-sm uppercase tracking-widest text-primary">{t.hours.label}</span>
            <h2 className="font-serif text-3xl md:text-5xl mt-2">{t.hours.title}</h2>
          </div>

          <div className="rounded-2xl border bg-background shadow-soft overflow-hidden">
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg text-foreground">{t.hours.header}</span>
            </div>
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === adjustedTodayIndex;
                const isClosed = item.hours === t.hours.closed;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
                      <span
                        className={`text-sm md:text-base ${
                          isToday ? "font-medium text-primary" : "text-foreground"
                        }`}
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full ml-2">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-sm md:text-base ${
                        isClosed ? "text-muted-foreground font-medium" : ""
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
