import { useEffect, useState, type ReactNode } from "react";
import * as Yup from "yup";
import { Formik, Field, Form } from "formik";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Nama lengkap tidak boleh kosong"),
  email: Yup.string()
    .email("Email tidak valid")
    .required("Email tidak boleh kosong"),
  phone: Yup.string()
    .matches(/^(?:\+62|62|0)8[1-9][0-9]{6,9}$/, "Nomor telepon tidak valid")
    .required("Nomor telepon tidak boleh kosong"),
  message: Yup.string().required("Pesan tidak boleh kosong"),
});

export default function KontakComponent({ children }: { children: ReactNode }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="mt-28 md:mt-42 mb-2 min-h-screen sm:relative pb-16 px-4 sm:p-0">
      <h2 className="text-2xl text-center mb-4 font-bold tracking-tight dark:text-white">
        Hubungi Kami ✈️
      </h2>
      <Formik
        initialValues={{
          subject: "Pesan Baru dari website Decade Inc",
          from_name: "Decade Inc",
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={async (values, { resetForm }) => {
          const data = values;
          const accessKey = "fce46edc-6c43-4308-b50e-0f1a0a291c4b";
          const formData = Object.assign(data, { access_key: accessKey });
          const formDataJson = JSON.stringify(formData);
          setIsSubmitting(true);
          const status = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: formDataJson,
          });
          if (!status.ok) {
            setIsError(true);
          }
          setIsSubmitting(false);
          resetForm();
          alert("Pesan berhasil dikirim");
        }}
      >
        {({ errors, touched }) => (
          <Form className="mx-auto mt-8 max-w-xl space-y-6 sm:mt-20 md:mt-16">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-base font-semibold  md:text-lg"
                >
                  Nama Lengkap
                </label>
                <div className="mt-2.5">
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-shadow dark:shadow-none"
                    placeholder="Udin Maxwell"
                  />
                  {errors.name && touched.name ? (
                    <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.name}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block font-semibold  md:text-lg"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-shadow dark:shadow-none"
                    placeholder="udin@example.com"
                  />
                  {errors.email && touched.email ? (
                    <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block font-semibold  md:text-lg"
                >
                  Nomor telepon
                </label>
                <div className="mt-2.5">
                  <div className="flex rounded-lg bg-white shadow-md focus:ring-2">
                    <div className="grid shrink-0 grid-cols-1"></div>
                    <Field
                      id="phone"
                      name="phone"
                      type="text"
                      placeholder="0852xxxxxx"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-shadow dark:shadow-none"
                    />
                  </div>
                  {errors.phone && touched.phone ? (
                    <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.phone}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block font-semibold  md:text-lg"
                >
                  Pesan
                </label>
                <div className="mt-2.5">
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    rows={4}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-shadow dark:shadow-none"
                    defaultValue={""}
                  />
                  {errors.message && touched.message ? (
                    <div className="mt-2 text-sm text-red-600 dark:text-red-500">
                      {errors.message}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* Other fields go here */}
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-black/80 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-white dark:text-black dark:hover:bg-white/80 focus:outline-none dark:focus:ring-gray-800 cursor-pointer"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Kirim"}
              </button>
            </div>
            {isError && (
              <p className="text-center text-red-300">
                Tidak dapat mengirim pesan
              </p>
            )}
          </Form>
        )}
      </Formik>
      {children}
      
    </div>
  );
}
