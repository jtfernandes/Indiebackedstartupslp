import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useI18n, type Segment } from '@/lib/i18n';
import { submitWaitlist } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Check } from 'lucide-react';

interface Props {
  segment: Segment;
}

interface FormValues {
  name: string;
  company: string;
  email: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm({ segment }: Props) {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: 'onTouched' });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);
    try {
      await submitWaitlist({ ...values, segment });
      setSubmitted(true);
    } catch {
      setSubmitError(t.waitlist.errors.generic);
    }
  });

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 border border-indie-yellow/40 bg-indie-yellow/5 p-6">
        <div className="flex h-10 w-10 items-center justify-center bg-indie-yellow text-indie-black">
          <Check className="h-5 w-5" strokeWidth={3} />
        </div>
        <div>
          <p className="text-lg font-bold text-white">{t.waitlist.success.title}</p>
          <p className="mt-1 text-sm text-white/70">{t.waitlist.success.body}</p>
        </div>
      </div>
    );
  }

  const companyLabel = t.waitlist.labels.company[segment];
  const companyPlaceholder = t.waitlist.placeholders.company[segment];

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">{t.waitlist.labels.name}</Label>
        <Input
          id="name"
          autoComplete="name"
          placeholder={t.waitlist.placeholders.name}
          aria-invalid={!!errors.name}
          {...register('name', { required: t.waitlist.errors.nameRequired })}
        />
        {errors.name && <p className="text-xs text-indie-yellow">{errors.name.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">{companyLabel}</Label>
        <Input
          id="company"
          autoComplete="organization"
          placeholder={companyPlaceholder}
          aria-invalid={!!errors.company}
          {...register('company', { required: t.waitlist.errors.companyRequired })}
        />
        {errors.company && <p className="text-xs text-indie-yellow">{errors.company.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t.waitlist.labels.email}</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder={t.waitlist.placeholders.email}
          aria-invalid={!!errors.email}
          {...register('email', {
            required: t.waitlist.errors.emailRequired,
            pattern: { value: EMAIL_RE, message: t.waitlist.errors.emailInvalid },
          })}
        />
        {errors.email && <p className="text-xs text-indie-yellow">{errors.email.message}</p>}
      </div>

      {submitError && (
        <p className="border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-white/85">
          {submitError}
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? t.waitlist.submitting : t.waitlist.submit}
      </Button>
    </form>
  );
}
