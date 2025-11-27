const Index = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="relative group">
          <div className="aspect-[3/4] overflow-hidden bg-gray-50 relative">
            <img
              src="https://cdn.poehali.dev/files/a49d6173-e866-425d-9847-4d57ef40bcc4.png"
              alt="Женские вельветовые брюки"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-8 right-8 space-y-1">
              <h2 className="text-5xl font-light tracking-tight text-black drop-shadow-sm">
                Женские брюки
              </h2>
              <p className="text-2xl text-black font-light drop-shadow-sm">
                Вельветовые
              </p>
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center rotate-90">
                <span className="text-base">👍</span>
              </div>
              <p className="text-lg text-black font-light drop-shadow-sm whitespace-nowrap">
                80% хлопок
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;