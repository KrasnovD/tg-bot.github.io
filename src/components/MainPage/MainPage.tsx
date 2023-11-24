import React from 'react';
const MainPage = () => {
  return (
    <div className="flex flex-col justify-between h-full items-center">
      <div className="bg-hardWorker flex flex-col">
        <div className="bg-sky-500 bg-opacity-20 rounded m-4 text-white">
          <span className="text-blue-500 font-bold">SOS IT</span> - это <span className="text-blue-500 underline-offset-1 underline">иновационная</span> IT-компания, специализирующаяся на предоставлении широкого спектра технологических решений и услуг для различных отраслей и бизнес-потребностей.
          Мы стремимся быть надежным партнером для наших клиентов, готовым прийти на помощь в любой ситуации.
        </div>
        <div className="bg-sky-500 bg-opacity-10 rounded m-3 text-white">
          Наша компания предлагает комплексное консультирование, разработку программного обеспечения, веб-разработку,
          создание мобильных приложений, облачные решения, кибербезопасность,
          аналитические исследования данных, автоматизацию бизнес-процессов и многое другое.
        </div>
        <div className="bg-sky-500 bg-opacity-10 rounded m-3 text-white">
          Мы гордимся нашей командой <span className="text-blue-500 underline-offset-1 underline">высококвалифицированных специалистов</span>, которые обладают глубокими знаниями и опытом в области информационных технологий.
          Мы постоянно следим за последними тенденциями и инновациями в сфере IT, чтобы предлагать нашим клиентам передовые решения.
        </div>
      </div>
      <div className="p-2 p-auto bg-sky-500 rounded text-sm mt-6 w-72 text-white">
        SOS IT - ваш надежный партнер в мире информационных технологий, готовый прийти
        на помощь и обеспечить ваш успех в цифровой эпохе.
      </div>
    </div>
  )
}

export default MainPage;
