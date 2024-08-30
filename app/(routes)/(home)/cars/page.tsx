import { Navbar } from "@/components/shared/NavBar";
import { db } from "@/lib/db";
import { HeadersCars } from "./components/HeaderCars";
import { FiltersListCars } from "./components/FiltersListCars";

export default async function pageCars() {
  const cars = await db.autos.findMany({
    where: {
      publicado: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <Navbar />
      page
      <div className="p-6 mx-auto max-w-7xl" >
        <HeadersCars/>
        <div>
            <FiltersListCars cars={cars}/>
        </div>

      </div>
    </div>
  );
}
