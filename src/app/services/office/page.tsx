"use client";
import React, { useEffect, useState } from "react";
import Service from "../Service";
import { getDataPath } from "@/app/utils/paths";
import { ServiceData, DataJson } from "../../types/service";

const Office: React.FC = () => {
  const [data, setData] = useState<ServiceData | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const jsonData: DataJson = await res.json();
        if (!jsonData.ServicesData) {
          console.warn("ServicesData is missing in JSON");
          return;
        }
        const service = jsonData.ServicesData.find((item) => item.id === 3);
        setData(service);
      } catch (error) {
        console.error("Error fetching service", error);
      }
    };

    fetchData();
  }, []);

  return <Service data={data} />;
};

export default Office;
