package DTOs;

import lombok.Data;

@Data
public class QuestionRequest {
    private Long userId;
    private Long questionId;
    private String difficulty;
}