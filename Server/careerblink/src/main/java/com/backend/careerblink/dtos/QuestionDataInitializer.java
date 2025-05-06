package com.backend.careerblink.dtos;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.backend.careerblink.models.AllQuestion;
import com.backend.careerblink.repository.QuestionRepository;

@Component
public class QuestionDataInitializer implements CommandLineRunner {

	private final QuestionRepository questionRepository ;
	
	public QuestionDataInitializer(QuestionRepository questionRepository) {
		this.questionRepository = questionRepository;
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("🚀 CommandLineRunner is starting...");  // Add this line
		// TODO Auto-generated method stub
		if(questionRepository.count() == 0) {
			List<AllQuestion> questions = List.of(
				    new AllQuestion(null, "Two Sum", "Easy", "https://leetcode.com/problems/two-sum/"),
				    new AllQuestion(null, "Longest Substring Without Repeating Characters", "Medium", "https://leetcode.com/problems/longest-substring-without-repeating-characters/"),
				    new AllQuestion(null, "Merge Intervals", "Hard", "https://leetcode.com/problems/merge-intervals/"),
				    new AllQuestion(null, "Valid Parentheses", "Easy", "https://leetcode.com/problems/valid-parentheses/"),
				    new AllQuestion(null, "Best Time to Buy and Sell Stock", "Easy", "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"),
				    new AllQuestion(null, "Valid Anagram", "Easy", "https://leetcode.com/problems/valid-anagram/"),
				    new AllQuestion(null, "Group Anagrams", "Medium", "https://leetcode.com/problems/group-anagrams/"),
				    new AllQuestion(null, "Top K Frequent Elements", "Medium", "https://leetcode.com/problems/top-k-frequent-elements/"),
				    new AllQuestion(null, "Product of Array Except Self", "Medium", "https://leetcode.com/problems/product-of-array-except-self/"),
				    new AllQuestion(null, "Maximum Subarray", "Easy", "https://leetcode.com/problems/maximum-subarray/"),
				    new AllQuestion(null, "Maximum Product Subarray", "Medium", "https://leetcode.com/problems/maximum-product-subarray/"),
				    new AllQuestion(null, "Find Minimum in Rotated Sorted Array", "Medium", "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"),
				    new AllQuestion(null, "Search in Rotated Sorted Array", "Medium", "https://leetcode.com/problems/search-in-rotated-sorted-array/"),
				    new AllQuestion(null, "Container With Most Water", "Medium", "https://leetcode.com/problems/container-with-most-water/"),
				    new AllQuestion(null, "Climbing Stairs", "Easy", "https://leetcode.com/problems/climbing-stairs/"),
				    new AllQuestion(null, "Coin Change", "Medium", "https://leetcode.com/problems/coin-change/"),
				    new AllQuestion(null, "Longest Increasing Subsequence", "Medium", "https://leetcode.com/problems/longest-increasing-subsequence/"),
				    new AllQuestion(null, "Word Break", "Medium", "https://leetcode.com/problems/word-break/"),
				    new AllQuestion(null, "Combination Sum", "Medium", "https://leetcode.com/problems/combination-sum/"),
				    new AllQuestion(null, "Course Schedule", "Medium", "https://leetcode.com/problems/course-schedule/"));
			
			questionRepository.saveAll(questions);
			System.out.println("✅ Questions inserted successfully!");
	} else {
		System.out.println("ℹ️ Questions already exist, skipping insertion.");
	}
  }	
}
