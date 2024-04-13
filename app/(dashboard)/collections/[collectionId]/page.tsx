"use client";
import CollectionForm from "@/components/collections/CollectionForm";
import Loader from "@/components/custom ui/Loader";
import { useEffect, useState } from "react";

const CollectionDetails = ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const [loading, setLoading] = useState(true);
  const [collectionsDetails, setCollectionsDetails] =
    useState<CollectionType | null>(null);

  const getCollectionDetails = async () => {
    try {
      const res = await fetch(`/api/collections/${params.collectionId}`, {
        method: "GET",
      });
      const data = await res.json()
      setCollectionsDetails(data)
      setLoading(false)
    } catch (error) {
      console.log("[collectionId_GET]", error);
    }
  };

  useEffect(() => {
    getCollectionDetails()
  }, [])
  return loading ? <Loader/> : <CollectionForm initialData={collectionsDetails}/>;
};

export default CollectionDetails;
