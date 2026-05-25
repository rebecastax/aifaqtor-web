import { redirect } from "next/navigation";

// Homepage bifurcadora — se construye en Task 8
// Por ahora redirige a manufactura para que el build funcione
export default function Home() {
  redirect("/manufactura");
}
