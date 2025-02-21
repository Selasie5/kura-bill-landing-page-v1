"use client"
import { useUserRoleStore } from "./store/store";

export default function Home() {

  const {isPharmacist} = useUserRoleStore();
  return (
   (
    !isPharmacist ? (
      <div>
        Hello Client
      </div>
    ): 
    (
      <div>
        Hello Pharmacist
      </div>
    )
   )
  );
}
