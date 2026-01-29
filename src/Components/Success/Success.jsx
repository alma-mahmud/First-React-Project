import React, { useEffect, useRef, useState } from "react";

/* ---------------- Counter Component ---------------- */
function Counter({ target, suffix = "", start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const duration = 1500;

    function animate(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const value =
        target % 1 === 0
          ? Math.floor(progress * target)
          : (progress * target).toFixed(1);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [target, start]);

  return (
    <h3
      className="
        text-[#151515]
        text-[28px]
        sm:text-[32px]
        md:text-[45px]
        lg:text-[50px]
        font-Inter font-bold leading-[100%]
      "
    >
      {count}
      {suffix}
    </h3>
  );
}

/* ---------------- Success Component ---------------- */
function Success() {
  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const Rightside = [
    { id: 1, number: 200, suffix: "+", title: "Customer Satisfied" },
    { id: 2, number: 4.5, suffix: "", title: "200+ Avg rating" },
    { id: 3, number: 351, suffix: "+", title: "Project Delivered" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-15 md:pt-30 lg:pt-42.75 pb-17.5 md:pb-30 lg:pb-37.25 lg:px-4"
    >
      <div className="container">
        <div
          className="
            bg-[#E0FFF9]
            rounded-[20px]
            px-4 md:px-12.5 lg:px-0
            py-10 md:py-15 lg:py-21.25
            flex flex-col lg:flex-row
            gap-10 xl:gap-31
            items-center
          "
        >
          {/* Left Side */}
          <div className="w-full lg:w-96.75 text-center lg:text-left">
            <h4
              className="
                text-[#6A4DF4]
                text-[25px]
                md:text-[30px]
                lg:text-[35px]
                font-Inter font-medium
                pb-3.75
              "
            >
              Our Success
            </h4>

            <h2
              className="
                text-[#151515]
                text-[22px]
                sm:text-[25px]
                md:text-[30px]
                lg:text-[35px]
                font-Inter font-semibold
                leading-[120%]
              "
            >
              West cost Brand makers-Global Edge
            </h2>
          </div>

          {/* Right Side */}
          <div
            className="
              w-full
              flex flex-col gap-8
              sm:flex-row sm:justify-between
              md:gap-10
              lg:w-180.5 lg:justify-center lg:gap-27.5
            "
          >
            {Rightside.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center"
              >
                <Counter
                  target={item.number}
                  suffix={item.suffix}
                  start={startCount}
                />
                <p
                  className="
                    text-[#737373]
                    text-[14px]
                    sm:text-[15px]
                    md:text-[20px]
                    font-Inter font-medium
                    pt-5
                  "
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Success;
