import { IEmployeeModel } from "../models/EmployeeModel";
import { deleteAPI, postAPI, putAPI } from "./apiFunction";

export const getEmployee = async (id: string = "") => {
  const data: IEmployeeModel[] = await postAPI(
    process.env.REACT_APP_URL_GET_EMPLOYEE,
    {},
    {
      messageFail: "Fetch employee failed",
    }
  );
  return data;
};

export const updateEmployee = async (item: IEmployeeModel) =>
  await putAPI(process.env.REACT_APP_URL_UPDATE_EMPLOYEE, item, {
    messageSuccess: "Successfully updated employee",
    messageFail: "Updated employee failed",
  });

export const createEmployee = async (item: IEmployeeModel) =>
  await postAPI(process.env.REACT_APP_URL_CREATE_EMPLOYEE, item, {
    messageSuccess: "Successfully created employee",
    messageFail: "Created employee failed",
  });

export const deleteEmployee = async (id: string) =>
  await deleteAPI(
    process.env.REACT_APP_URL_GET_EMPLOYEE,
    { id },
    {
      messageSuccess: "Successfully deleted employee",
      messageFail: "Deleted employee failed",
    }
  );

export const changeRoleEmployee = async (item: IEmployeeModel) => {
  if (item.role && item.role > 0) {
    const res = await putAPI(
      process.env.REACT_APP_URL_UPDATE_EMPLOYEE,
      {
        id: item.id,
        role: 0,
      },
      {
        messageSuccess: `Successfully change role to normal employee`,
        messageFail: "Changed role failed",
      }
    );
    return res;
  }
};
