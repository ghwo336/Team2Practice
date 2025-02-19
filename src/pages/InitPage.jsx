import {useState} from "react";
import styled from "styled-components";
import LayOut from "../../ui/LayOut";

const NameWrapper = styled.div`
  margin-top: 10px;
`;

const IdWrapper = styled.div`
  margin-top: 10px;
`;

const PwWrapper = styled.div``;

const Wrapper = styled.div`
  margin-left: 20px;
`;

const Text = styled.div`
  font-weight: 700;
  font-size: 50px;
  padding: 20px;
`;

const InitPage = () => {
  const [name, setName] = useState("");
  const [memberId, setId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    if (!name || !memberId || !password) {
      alert("이름, 아이디, 비밀번호를 모두 입력하세요.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://54.152.101.147:8443/member/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name, memberId, password}),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("회원가입 성공!");
        console.log("Response:", data);
      } else {
        throw new Error(data.message || "회원가입 실패");
      }
    } catch (err) {
      setError(err.message);
      alert("회원가입 실패: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayOut>
      <Text>회원가입</Text>
      <Wrapper>
        <NameWrapper>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={handleNameChange}
          />
        </NameWrapper>
        <IdWrapper>
          <input
            type="text"
            placeholder="아이디"
            value={memberId}
            onChange={handleIdChange}
          />
        </IdWrapper>
        <PwWrapper>
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
        </PwWrapper>
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "가입 중..." : "OK"}
        </button>
        {error && <p style={{color: "red"}}>{error}</p>}
      </Wrapper>
    </LayOut>
  );
};

export default InitPage;
