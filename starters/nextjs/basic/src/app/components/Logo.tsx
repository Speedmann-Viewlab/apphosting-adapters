import Image from "next/image";

export function Logo() {
  return (
    <>
      <div
      style={{
        position: "absolute",
        top: "-6vh",
        left: "-43vw",
        height: "33vh",
      }}
    >
      <Image
        src="/logo.png"
        alt="Logo"
        width={500}
        height={500}
        style={{
          height: "100%",
          width: "auto",
        }}
        priority
      />
    </div>
    </>
  );
}
