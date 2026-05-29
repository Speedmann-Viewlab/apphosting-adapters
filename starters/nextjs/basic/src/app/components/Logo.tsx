import Image from "next/image";

export function Logo() {
  return (
    <>
      <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "16px",
      }}
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={500}
        height={500}
        style={{
          height: "40px",
          width: "auto",
        }}
        priority
      />
    </div>
    </>
  );
}
