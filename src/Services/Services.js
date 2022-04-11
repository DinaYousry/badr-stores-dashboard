const GetInfo = function (pageURL, callBack) {
    fetch(
      pageURL,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result["Data"].length > 0) {
            console.log(Object.keys(result["Data"][0]));
            let headers = Object.keys(result["Data"][0]);
            let finalRes = { headers: headers, bodyData: result };
            callBack(finalRes);
            // console.log(result);
          } else {
            callBack("Data Error");
          }
        },
        (error) => {
          callBack(error);
        }
      );
  };
  
  
  const EditInfo = function (data, url, callBack) {
    fetch(
      `${url}/${data["id"]}`,
  
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result) {
            callBack(result);
            console.log("EditInfo url", url + "/" + data);
            console.log("EditInfo result", result);
          } else {
            callBack("Data Error");
          }
        },
        (error) => {
          callBack(error);
        }
      );
  };
  
  const DeleteInfo = function (data, url, callBack) {
    fetch(
      `${url}/${data["id"]}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result) {
            callBack(result);
            console.log("DeleteInfo url", url + "/" + data);
            console.log("DeleteInfo result", result);
          } else {
            callBack("Data Error");
          }
        },
        (error) => {
          callBack(error);
        }
      );
  };
  
  
  const AddInfo = function (data, url, callBack) {
    fetch(
      url,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then(
        (result) => {
          callBack(result);
          console.log(result);
        },
        (error) => {
          callBack(error);
        }
      );
  };
  
  
  module.exports.GetInfo = GetInfo;
  module.exports.EditInfo = EditInfo;
  module.exports.AddInfo = AddInfo;
  module.exports.DeleteInfo = DeleteInfo;
  