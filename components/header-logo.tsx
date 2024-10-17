
import Image from "next/image";
import Link from "next/link";

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className="items-center hidden lg:flex">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
            
            </div>
        </Link>
    );
};