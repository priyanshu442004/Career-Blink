package com.backend.careerblink.dtos;

import lombok.Data;

@Data
public class QuestionRequest {
    private Long userId;
    private Long questionId;
    private boolean solved; // <-- used for toggle endpoint
}