import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  // Based on business data: All days 00:00-23:59 (open)
  const schedule = [
    { hours: "07:00 - 19:00" }, // Monday
    { hours: "07:00 - 19:00" }, // Tuesday
    { hours: "07:00 - 19:00" }, // Wednesday
    { hours: "07:00 - 19:00" }, // Thursday
    { hours: "07:00 - 19:00" }, // Friday
    { hours: "09:00 - 12:00" }, // Saturday
    { hours: t.hours.closed }, // Sunday
  ];

  const todayIndex = new Date().getDay();
  // JavaScript getDay: 0 = Sunday, convert to array index where Monday is 0
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="hours" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl"
        >
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="text-sm uppercase tracking-widest text-primary">
              {t.hours.label}
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mt-2">
              {t.hours.title}
            </h2>
          </div>

          {/* Hours Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card shadow-soft overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
              <Clock className="h-5 w-5 text-primary" />
              <span className="font-serif text-lg text-foreground">
                {t.hours.header}
              </span>
            </div>

            {/* Hours List */}
            <div className="divide-y">
              {schedule.map((item, i) => {
                const isToday = i === adjustedTodayIndex;
                const isClosed = item.hours === t.hours.closed;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    viewport={{ once: true }}
                    className={`px-6 py-4 flex justify-between items-center transition-colors ${
                      isToday ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {isToday && (
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                      )}
                      <span
                        className={`${
                          isToday
                            ? "font-semibold text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {t.hours.days[i]}
                      </span>
                      {isToday && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                          {t.hours.today}
                        </span>
                      )}
                    </div>
                    <span
                      className={`${
                        isClosed
                          ? "text-muted-foreground"
                          : "text-foreground font-medium"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
