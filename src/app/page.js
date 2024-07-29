import Image from "next/image";
import UserRegForm from "./components/form";
import ImageUpload from "./components/fileUploads";

export default function Home() {
  return (
  <div>
     <UserRegForm />
     <ImageUpload />
  </div>
  );
}
