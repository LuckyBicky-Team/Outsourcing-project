import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@/components/Button';
import { useDeleteFeedback, useGetFeedback } from '@/stores/queries/useFeedbackQueries';

const FeedbackDetail = () => {
  const { id } = useParams();
  const { data, isPending } = useGetFeedback(id);
  const { mutate: deleteFeedbackMutation } = useDeleteFeedback(id);

  if (isPending) return null;

  return (
    <div>
      <StArticle>
        <StText>{data.title}</StText>
        <StText>{data.name}</StText>
        <StContent>{data.content}</StContent>
      </StArticle>
      <StButtons>
        <Button variant="rounded">목록으로</Button>
        <StRow>
          <Button variant="rounded" href={`/feedback/${id}/edit`}>
            수정하기
          </Button>
          <Button variant="rounded" onClick={() => deleteFeedbackMutation(id)}>
            삭제하기
          </Button>
        </StRow>
      </StButtons>
    </div>
  );
};

const StRow = styled.div`
  display: flex;
  gap: 10px;
`;

const StButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 48px;
  gap: 10px;
`;

const StArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StText = styled.div`
  padding: 24px 32px;
  border-radius: 12px;
  background-color: #11151b;
  font-size: 18px;
  font-weight: 500;
  color: #c6c6c6;
`;

const StContent = styled.p`
  padding: 24px 32px;
  border-radius: 12px;
  background-color: #11151b;
  font-size: 18px;
  font-weight: 500;
  color: #c6c6c6;
  min-height: 250px;
  width: 100%;
  line-height: 140%;
`;

export default FeedbackDetail;