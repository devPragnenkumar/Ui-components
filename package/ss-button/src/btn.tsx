function Btn({ label }: Readonly<{ label: string }>) {
  return (
    <button
      onClick={() => {
        window.alert("SS button clicked update");
      }}
    >
      {label}
    </button>
  );
}

export { Btn };
