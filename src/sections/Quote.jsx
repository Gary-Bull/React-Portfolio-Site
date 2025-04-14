import React from "react";

const Quote = () => {
  return (
    <section className="bg-linear-to-t from-cyan-400 to-blue-400 mx-auto px-8 py-12 max-w-7xl">
      <div className="container bg-white rounded-2xl shadow-2xl mx-auto p-4 sm:p-10 text-center">
        <p className="text-2xl leading-6 sm:leading-8 text-center mt-4 pb-8">
          <q>
            Most good programmers do programming not because they expect to get
            paid or get adulation by the public, but because it is fun to
            program
          </q>
        </p>
        <p className="text-lg font-semibold">
          <em>Linus Torvalds</em>
        </p>
        <p className="text-sm">(creator of the Linux Kernel and Git)</p>
      </div>
    </section>
  );
};

export default Quote;
