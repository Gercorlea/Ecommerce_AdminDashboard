import { DataTable } from "@/components/custom ui/DataTable";
import { columns } from "@/components/customers/CustomerColumns";
import { Separator } from "@/components/ui/separator";
import Customer from "@/lib/models/Customer";
import { connectToDB } from "@/lib/mongoDB";

const Customers = async () => {
  await connectToDB();
  const customers = await Customer.find().sort({ createdAt: "desc" });
  
  return (
    <div className="px-10 py-5">
      <p className="text-heading2-bold">Customers</p>
      <Separator className="my-5 bg-grey-1" />
      <DataTable data={customers} searchKey="name" columns={columns} />
    </div>
  );
};

export default Customers;

export const dynamic = 'force-dynamic'