function page() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-8 text-3xl font-bold">Contact Me</h1>
      <p className="mt-4 text-xl">
        For all inquiries and bookings, please email{" "}
        <a
          href="mailto:emazivkovic17@gmail.com"
          className="text-blue-500 hover:underline"
        >
          emazivkovic17@gmail.com
        </a>
        .
      </p>
    </div>
  );
}

export default page;
