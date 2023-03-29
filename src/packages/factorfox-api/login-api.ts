export const LoginApi = async (auth: any) => {
  let bodyContent = JSON.stringify({
    Username: auth.email,
    Password: auth.password,
  });
  let res = await fetch(
    "https://xw11vdxrsb.execute-api.us-east-2.amazonaws.com/natfstage/token",
    {
      method: "POST",
      body: bodyContent,
    }
  )
    .then(async (result) => {
      let status = result.status;
      let token = await result.text();
      return { status, token };
    })
    .catch((err) => {
      console.log("error retrieving data", err);
    });
  return res;
};
