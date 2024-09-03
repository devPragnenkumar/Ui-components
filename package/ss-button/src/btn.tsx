function Btn({ label }: Readonly<{ label: string }>) {
  return (
    <button
      onClick={() => {
        window.alert("SS button clicked");
      }}
    >
      {label}
    </button>
  );
}

export { Btn };
