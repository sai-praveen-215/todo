import { Button, Col, Input, Row, Table } from "antd";
import "../App.css";
import { useState } from "react";
function Todo() {
  const [list, setList] = useState<any>([]);
  const [todoList, setTodoList] = useState<any>({
    initial: "",
    processing: "",
    completed: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [isEditObj, setIsEditObj] = useState<any>(null);

  const handleAdd = () => {
    console.log(isEdit, "hiii");
    if (isEdit) {
      console.log("hii");
      const newList = [...list];
      const obj = newList[isEditObj];
      newList[isEditObj] = { ...obj, initial: todoList.initial };
      setList(newList);
      setIsEditObj(null);
      setTodoList({
        initial: "",
        processing: "",
        completed: "",
      });
      setIsEdit(false);
    } else {
      if (list.length !== 0) {
        console.log("hiii");

        list.map((item: any) => {
          Object.keys(item).map((key: any) => {
            console.log(item[key], "item[key]");

            console.log(todoList?.initial, "todoList?.initial");
            console.log(item.initial === todoList?.initial, "condition");
            if (item.initial === todoList?.initial) {
              alert("todo already exists");
            } else {
              setList([...list, todoList]);
              setTodoList({ initial: "", processing: "", completed: "" });
            }
          });
        });
      } else {
        setList([...list, todoList]);
        setTodoList({ initial: "", processing: "", completed: "" });
      }
    }
  };
  console.log(todoList.initial);

  const handleInitial = (prop: any) => {
    const { item, index } = prop;

    const newList = [...list];
    const obj = newList[index];
    newList[index] = { ...obj, initial: "", processing: item.initial };
    setList(newList);
  };
  const handleProcessing = (prop: any) => {
    const { item, index } = prop;
    const newList = [...list];
    const obj = newList[index];
    newList[index] = { ...obj, processing: "", completed: item.processing };
    setList(newList);
  };

  const handleEdit = (prop: any) => {
    setIsEdit(true);
    const { item, index } = prop;
    setIsEditObj(index);
    setTodoList({ initial: item.initial, processing: "", completed: "" });
  };

  const columns: any = [
    {
      key: "initial",
      title: "Initial",
      dataIndex: "initial",
      render: (_: any, item: any, index: any) => {
        if (item.initial !== "") {
          return (
            <>
              <h2>{item.initial}</h2>
              {isEdit === false && (
                <div>
                  <Button
                    onClick={() => {
                      handleInitial({ item, index });
                    }}
                  >
                    Add
                  </Button>
                  <Button
                    onClick={() => {
                      handleEdit({ item, index });
                    }}
                  >
                    Edit
                  </Button>
                </div>
              )}
            </>
          );
        }
      },
    },
    {
      key: "processing",
      title: "Processing",
      dataIndex: "processing",
      render: (_: any, item: any, index: any) => {
        if (item.processing !== "") {
          return (
            <>
              <h3>{item.processing}</h3>
              <Button
                onClick={() => {
                  handleProcessing({ item, index });
                }}
              >
                Completed
              </Button>
            </>
          );
        }
      },
    },
    {
      key: "completed",
      title: "Pompleted",
      dataIndex: "completed",
    },
  ];
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xl={12} sm={12} xxl={12} xs={12}>
          <Input
            value={todoList.initial}
            onChange={(e) => {
              setTodoList({ ...todoList, initial: e.target.value });
            }}
          />
        </Col>
        <Col xl={12} sm={12} xxl={12} xs={12}>
          <Button onClick={handleAdd} style={{ width: "40%" }} type="primary">
            {isEdit ? "Save" : "Add"}
          </Button>
        </Col>
      </Row>
      <div>
        <Table dataSource={list} columns={columns}></Table>
      </div>
    </div>
  );
}

export default Todo;
