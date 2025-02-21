export const Input = ({ label, register, type, errors }) => {
  return (
    <div>
      <label className="block" htmlFor="email">
        {label}
      </label>
      <input className="w-full max-w-md" type={type} id="email" {...register} />
      {errors.email && (
        <span className="text-xs text-red-600">{errors.email.message}</span>
      )}
    </div>
  );
};
