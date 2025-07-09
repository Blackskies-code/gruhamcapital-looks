const getScheduleForConsultationApi = async () => {
  let apiData: any = [];
  //   api to fetch the available slots for a user to book
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => {
      return res.json();
    })
    .then((_) => {
      const result = [
        {
          time: "11:00am",
          availableSlots: "2",
        },
        {
          time: "12:00am",
          availableSlots: "2",
        },
        {
          time: "13:00pm",
          availableSlots: "2",
        },
        {
          time: "14:00pm",
          availableSlots: "2",
        },
      ];
      console.log("result", result);
      apiData = result;
    });
  console.log("timeout fn called");
  //   Calling Timeout fn to test loading icon
  await timeoutFn();
  console.log("timeout fn ended", apiData);
  return apiData;
};

const timeoutFn = () => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      console.log("timeout in promise");
      resolve("done");
    }, 5000);
  });
};

export default getScheduleForConsultationApi;
