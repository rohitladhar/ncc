import Link from "next/link";
import Image from "next/image";
import { getImgPath } from "@/app/utils/paths";

const Logo = () => {
  return (
    <Link href="/" className="block w-fit">
      <Image
        src={getImgPath("/images/logo/logo.svg")}
        alt="Logo"
        width={121}
        height={56}
        priority
        
      />
    </Link>
  );
};

export default Logo;
