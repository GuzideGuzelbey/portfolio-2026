import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactFormFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  value: string;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
  rows?: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function ContactFormField({
  id,
  name,
  label,
  type = 'text',
  value,
  error,
  disabled,
  placeholder,
  rows,
  onChange,
  onBlur,
}: ContactFormFieldProps) {
  const isTextarea = type === 'textarea';
  
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label} <span className="text-destructive" aria-label="required">*</span>
      </Label>
      {isTextarea ? (
        <Textarea
          id={id}
          name={name}
          required
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <Input
          id={id}
          name={name}
          type={type}
          required
          autoComplete={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
