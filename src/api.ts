import { useRecoilState } from "recoil";
import { authAtom } from "./atoms";

const BASE_URL = "http://119.203.225.3:8081";

// export async function fetchAuthAdmin(id: string, pw: string) {
//   const param = `email=${id}&password=${pw}`;
//   console.log("commit2");
//     await (await fetch(`${BASE_URL}/admin/login?${param}`))
//       .json()
//       .then((res) => {
//         console.log("commit3");
//         localStorage.setItem("token", res.accessToken);
//         console.log("commit4");
//         const [state, setState] = useRecoilState(authAtom);
//         setState((currVal) => (currVal.accessToken = res.accessToken));
//       });
// }

export function fetchAuthAdmin(id: string, pw: string) {
  return fetch(`${BASE_URL}/admin/login?email=${id}&password=${pw}`).then(
    (value) => value.json()
  );
}
