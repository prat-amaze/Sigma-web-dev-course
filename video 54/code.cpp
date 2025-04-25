#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>
using namespace std;

int solve(int n, string &s) {
    vector<int> prefixXOR(n + 1, 0);
    int totalXOR = 0;

    // Compute the prefix XOR of character parities
    for (int i = 0; i < n; ++i) {
        int c = s[i] - 'a';
        totalXOR ^= 1 << c;
        prefixXOR[i + 1] = totalXOR;
    }

    int minLength = n;  // Initialize with the maximum possible length
    unordered_map<int, int> earliestIndex;
    earliestIndex[0] = 0;  // Base case for empty prefix

    for (int i = 1; i <= n; ++i) {
        int currentXOR = prefixXOR[i];

        // Check all possible parities with at most one odd count
        for (int j = 0; j <= 26; ++j) {
            int remainingXOR = (j == 26) ? 0 : (1 << j);
            int requiredXOR = totalXOR ^ remainingXOR;
            int neededPrefixXOR = currentXOR ^ requiredXOR;

            auto it = earliestIndex.find(neededPrefixXOR);
            if (it != earliestIndex.end()) {
                int length = i - it->second;
                if (length < minLength) {
                    minLength = length;
                }
            }
        }

        // Record the earliest occurrence of the current prefixXOR
        if (earliestIndex.find(currentXOR) == earliestIndex.end()) {
            earliestIndex[currentXOR] = i;
        }
    }

    // If minLength wasn't updated, return n - 1
    return (minLength != n) ? minLength : n - 1;
}

int main() {
    int n;
    cin>>n;
    std::string s;
    std::cin >> s;
    int result = solve(n,s);
    std::cout << result << std::endl;
    return 0;
}
