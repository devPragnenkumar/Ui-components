function Link({ href, text }: { href: string; text: string }) {
  return <a href={href}>Go to {text}</a>;
}

export { Link };
