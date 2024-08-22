function Header({ children }: Readonly<{ children: string }>) {
  console.log("ss-button added");
  return <div>{children}</div>;
}
export { Header };
