import { DataTable } from "@/components/custom ui/DataTable";
import { columns } from "@/components/orderItems/orderItemsColumns";

const OrderDetails = async ({ params }: { params: { orderId: string } }) => {
  const res = await fetch(`http://localhost:3001/api/orders/${params.orderId}`);

  const { orderDetails, customer } = await res.json();

  const { street1, street2, city, state, postalCode, country } =
    orderDetails.shippingAddress;

  // const orderProducts = [];
  // orderDetails.products.map((orderDetail: any) => {
  //   orderProducts.push([...orderDetail, product: orderDetail.product.toString()])
  // });

  return (
    <div className="flex flex-col p-10 gap-5">
      <p className="text-base-bold">
        Oder ID: <span className="text-base-medium">{orderDetails._id}</span>
      </p>
      <p className="text-base-bold">
        Customer name: <span className="text-base-medium">{customer.name}</span>
      </p>
      <p className="text-base-bold">
        Shipping address:{" "}
        <span className="text-base-medium">
          {street1}
          {`${street2 && `, ${street2}`}`}, {city}, {state}, {postalCode},{" "}
          {country}{" "}
        </span>
      </p>
      <p className="text-base-bold">
        Total Paid:{" "}
        <span className="text-base-medium">
          ${orderDetails.totalAmount} MXN
        </span>
      </p>
      <p className="text-base-bold">
        Shipping Rate ID:{" "}
        <span className="text-base-medium">{orderDetails.shippingRate}</span>
      </p>
      <DataTable
        columns={columns}
        data={orderDetails.products}
        searchKey="product"
      />
    </div>
  );
};

export default OrderDetails;
