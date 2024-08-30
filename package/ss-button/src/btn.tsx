function Btn({ label }: Readonly<{ label: string }>) {
  return (
    <button
      onClick={() => {
        window.alert("SS button clicked updated");
      }}
    >
      {label}
    </button>
  );
}

export { Btn };
