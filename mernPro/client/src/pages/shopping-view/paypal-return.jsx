import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { capturePayment } from "@/store/shop/order-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

function PaypalReturnPage() {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paymentId = params.get("paymentId");
  const payerId = params.get("PayerId");

  useEffect(() => {
    if (paymentId && payerId) {
      const orderId = JSON.parse(sessionStorage.getItem);

      dispatch(capturePayment({paymentId,payerId,orderId})).then((data)=>{
        if(data?.payload?.success){
            sessionStorage.removeItem('currentOrderId');
            window.location.href = '/shop/payment-success';
        }
      })
    }
  }, [payerId, paymentId, dispatch]);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Proccessing Payment... Please wait!</CardTitle>
      </CardHeader>
    </Card>
  );
}

export default PaypalReturnPage;
