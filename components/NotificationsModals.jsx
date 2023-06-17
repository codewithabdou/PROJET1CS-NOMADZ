import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import getEvents from "@Api/getEvents";
import { Audio } from "react-loader-spinner";
import { MdAccessTimeFilled } from "react-icons/md";

const NotificationsModal = ({
  setIsNotificationsModalOpen,
  isNotificationsModalOpen,
}) => {
  const [events, setEvents] = useState([]);
  const [isFetchingEvents, setIsFetchingEvents] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsFetchingEvents(true);
      getEvents()
        .then((data) => {
          console.log(data);
          setEvents(data);
          setIsFetchingEvents(false);
        })
        .catch((e) => console.log(e));
    }, 10000);
  }, []);

  function formatDate(dateString) {
    var date = new Date(dateString);
    var formattedDate = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    // Extract the date and time parts
    var [datePart, timePart] = formattedDate.split(", ");

    // Rearrange the date parts
    var [month, day, year] = datePart.split("/");
    var rearrangedDate = `${day}-${month}-${year}`;

    // Combine the rearranged date and time parts
    var result = `${rearrangedDate} à ${timePart}`;

    return result;
  }

  return (
    <Modal
      footer={null}
      onCancel={() => {
        setIsNotificationsModalOpen(false);
      }}
      open={isNotificationsModalOpen}
    >
      {isFetchingEvents ? (
        <div className="flex-center bg-[#FEFCFB] h-full w-full">
          <Audio
            height="100"
            width="100"
            color="#FA7436"
            ariaLabel="audio-loading"
            wrapperStyle={{}}
            wrapperClass="wrapper-class"
            visible={true}
          />
        </div>
      ) : (
        <div className=" px-4 ">
          <h1 className="font-semibold text-2xl">Notifications</h1>
          {Array.isArray(events) ? (
            <div className="grid grid-cols-1 overflow-auto h-[70vh] mt-4 md:px-4  gap-4">
              {events.map((e, index) => (
                <div
                  key={e.id}
                  className=" border-b-[#D9D9D9] border-b w-full "
                >
                  <div className="flex ml-4 gap-4">
                    <h2 className="text-xl font-semibold text-[#222222]">
                      {e.name}
                    </h2>

                    <div className="flex items-center gap-3 justify-between rounded-2xl py-1.5 px-4 max-w-fit bg-[#D9D9D9]">
                      <MdAccessTimeFilled className="text-[#FA7436]" />
                      <p className="text-xs text-[#222222]">
                        {formatDate(e.date)}
                      </p>
                    </div>
                  </div>
                  <p className="indent-5 my-2">{e.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex-center font-semibold text-[#222222] m-8 h-full w-full">
              Pas d'évènements qui vous intérèssent .
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};

export default NotificationsModal;
