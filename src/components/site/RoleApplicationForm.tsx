import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import type { Role, RoleField } from "./roleConfig";

function FormField({ field }: { field: RoleField }) {
  const baseInput =
    "mt-2 w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-terracotta focus:ring-2 focus:ring-terracotta/20";
  const labelCls =
    "block text-[11px] uppercase tracking-[0.18em] text-ink/60 sm:text-xs sm:tracking-[0.2em]";

  if (field.type === "select") {
    return (
      <div>
        <label htmlFor={field.name} className={labelCls}>
          {field.label}
          {field.required && <span className="ml-1 text-terracotta">*</span>}
        </label>
        <select
          id={field.name}
          name={field.name}
          required={field.required}
          className={baseInput}
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          {field.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (field.type === "textarea") {
    return (
      <div className="sm:col-span-2">
        <label htmlFor={field.name} className={labelCls}>
          {field.label}
          {field.required && <span className="ml-1 text-terracotta">*</span>}
        </label>
        <textarea
          id={field.name}
          name={field.name}
          required={field.required}
          rows={5}
          className={baseInput + " resize-none"}
        />
      </div>
    );
  }

  return (
    <div>
      <label htmlFor={field.name} className={labelCls}>
        {field.label}
        {field.required && <span className="ml-1 text-terracotta">*</span>}
      </label>
      <input
        id={field.name}
        name={field.name}
        type={field.type}
        required={field.required}
        className={baseInput}
      />
    </div>
  );
}

export function   RoleApplicationForm({ role }: { role: Role }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-terracotta/30 bg-card shadow-lg">
      <div className="border-b border-terracotta/15 bg-ivory/60 px-5 py-5 sm:px-8 sm:py-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-terracotta sm:tracking-[0.3em]">
          Application
        </p>
        <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl md:text-5xl">
          Join as {role.label}
        </h1>
        <p className="mt-2 text-sm text-ink/70 sm:text-base">{role.blurb}</p>
      </div>

      {submitted ? (
        <div className="flex flex-col items-center justify-center gap-3 px-5 py-12 text-center sm:px-8 sm:py-16">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-terracotta text-ivory">
            <Check className="h-6 w-6" />
          </div>
          <h2 className="font-display text-xl text-ink sm:text-2xl">Thank you</h2>
          <p className="max-w-md text-sm text-ink/70">
            Your application as a {role.label} has been received. We'll review it and reach out within a few days.
          </p>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="mt-2 text-xs uppercase tracking-[0.2em] text-terracotta underline-offset-4 hover:underline sm:text-sm"
          >
            Submit another
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 px-5 py-6 sm:grid-cols-2 sm:gap-5 sm:px-8 sm:py-8"
        >
          {role.fields.map((field) => (
            <FormField key={field.name} field={field} />
          ))}
          <div className="sm:col-span-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-ivory transition-opacity hover:opacity-90 sm:px-8 sm:py-3.5 sm:text-sm"
            >
              Submit application
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
