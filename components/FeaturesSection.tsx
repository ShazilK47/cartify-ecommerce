import React from "react";
// Example icons from react-icons
import { FaShippingFast, FaHeadset, FaMoneyBillAlt } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-20">
      <div className="flex flex-col items-center justify-center gap-14 md:flex-row">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <FaShippingFast className="mb-2 h-12 w-12 md:h-16 md:w-16 text-black" />
          <h3 className="mb-1 text-lg font-semibold">Free and Fast Delivery</h3>
          <p className="text-gray-500">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <FaHeadset className="mb-2 h-12 w-12 md:h-16 md:w-16 text-black" />
          <h3 className="mb-1 text-lg font-semibold ">24/7 Customer Service</h3>
          <p className="text-gray-500">Friendly 24/7 customer support</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <FaMoneyBillAlt className="mb-2 h-12 w-12 md:h-16 md:w-16 text-black" />
          <h3 className="mb-1 text-lg font-semibold">Money Back Guarantee</h3>
          <p className="text-gray-500">We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
}
