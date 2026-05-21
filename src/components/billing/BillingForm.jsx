import InputField from "../common/InputField";
import Button from "../common/Button";

export default function BillingForm() {
  return (
    <div className="bg-white border rounded-lg p-6">

      <h2 className="text-2xl font-semibold mb-2">
        Review your details
      </h2>

      <p className="font-medium mb-6">
        Billing Information
      </p>

      <div className="grid grid-cols-2 gap-4">

        <InputField
          label="Company Name"
          placeholder="abhigyan"
        />

        <InputField
          label="Email"
          placeholder="email@example.com"
        />

        <InputField
          label="GST Number"
          placeholder="GST Number"
        />

        <InputField
          label="PAN Number"
          placeholder="PAN Number"
        />

        <InputField
          label="Premise/House no."
          placeholder="Premise/House no."
        />

        <InputField
          label="Street"
          placeholder="Street"
        />

        <InputField
          label="State"
          placeholder="Select state"
        />

        <InputField
          label="City"
          placeholder="Select city"
        />

        <InputField
          label="Country"
          placeholder="India"
        />

        <InputField
          label="Pin Code"
          placeholder="Pincode"
        />

      </div>

      <div className="flex justify-end gap-4 mt-8">

        <Button
          bg="bg-gray-200"
          text="text-black"
        >
          Cancel
        </Button>

        <Button>
          Save Details
        </Button>

      </div>
    </div>
  );
}