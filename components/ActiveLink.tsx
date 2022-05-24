import Link from "next/link";
import { useRouter } from "next/router";
interface Props {
  href: string;
  text: string;
}
const style = {
  color: "blue",
  textDecoration: "underline",
};
const style2 = {
    color: "black",
  };

export const ActiveLink = ({ href, text }: Props) => {
  const { asPath } = useRouter();
  return (
    <Link href={href}>
      <a style={asPath === href ?style: style2 }>{text}</a>
    </Link>
  );
};
