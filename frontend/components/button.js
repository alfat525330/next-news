"use client";

export default function Button({ className = '', click, type = 'button', children  }) {
  return (
    <button
      type={type}
      className={className}
      onClick={click}
    >
      {children }
    </button>
  );
}
