"use client";

import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ContactFormField } from './ContactFormField';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/translations';

export function ContactForm() {
  const { language } = useLanguage();
  const t = getTranslation(language);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };
    
    setErrors(newErrors);
    
    if (Object.values(newErrors).some(error => error !== '')) {
      setStatus('error');
      return;
    }
    
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrors(prev => ({
        ...prev,
        message: error instanceof Error ? error.message : 'Failed to submit form. Please try again.',
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="m-0 space-y-6" noValidate>
        {status === 'error' && Object.values(errors).some(error => error !== '') && (
          <div 
            role="alert" 
            aria-live="assertive"
            className="bg-destructive/10 border border-destructive text-destructive px-4 py-3 rounded-md"
          >
            <p className="font-semibold mb-2">Please fix the following errors:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              {errors.name && <li>{errors.name}</li>}
              {errors.email && <li>{errors.email}</li>}
              {errors.message && <li>{errors.message}</li>}
            </ul>
          </div>
        )}

        <ContactFormField
          id="name"
          name="name"
          label={t.contact.form.name}
          type="text"
          value={formData.name}
          error={errors.name}
          disabled={status === 'loading'}
          placeholder={t.contact.form.namePlaceholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <ContactFormField
          id="email"
          name="email"
          label={t.contact.form.email}
          type="email"
          value={formData.email}
          error={errors.email}
          disabled={status === 'loading'}
          placeholder={t.contact.form.emailPlaceholder}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <ContactFormField
          id="message"
          name="message"
          label={t.contact.form.message}
          type="textarea"
          value={formData.message}
          error={errors.message}
          disabled={status === 'loading'}
          placeholder={t.contact.form.messagePlaceholder}
          rows={6}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={status === 'loading'}
          aria-live="polite"
        >
          {status === 'loading' && t.contact.form.sending}
          {status === 'success' && 'Message Sent!'}
          {status === 'error' && 'Please fix errors above'}
          {status === 'idle' && t.contact.form.send}
        </Button>

        {status === 'success' && (
          <div 
            role="status" 
            aria-live="polite"
            className="text-sm text-center text-primary bg-primary/10 border border-primary/20 rounded-md p-3"
          >
            Thank you! I'll get back to you soon.
          </div>
        )}
      </form>
    </div>
  );
}
