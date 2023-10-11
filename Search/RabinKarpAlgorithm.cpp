/*
 * C++ Program to Implement Rabin-Karp Algorithm
 */
#include <iostream>
#include <cstdio>
#include <cstring>
#include <cstdlib>
using namespace std;
#define d 256

void search(char *pat, char *txt, int q)
{
    int M = strlen(pat);
    int N = strlen(txt);
    int i, j;
    int p = 0;
    int t = 0;
    int h = 1;
    for (i = 0; i < M - 1; i++)
        h = (h * d) % q;
    for (i = 0; i < M; i++)
    {
        p = (d *p + pat[i]) % q;
        t = (d * t + txt[i]) % q;
    }
    for (i = 0; i <= N - M; i++)
    {
        if (p == t)
        {
            for (j = 0; j < M; j++)
            {
                if (txt[i + j] != pat[j])
                    break;
            }
            if (j == M)
            {
                cout<<"Pattern found at index: "<<i<<endl;
            }
        }
        if (i < N - M)
        {
            t = (d * (t - txt[i] * h) + txt[i + M]) % q;
            if (t < 0)
              t = (t + q);
        }
    }
}
 
int main()
{
    char *txt = "Rabin Karp Algorithm";
    char *pat = "arp";
    int q = 101;
    search(pat, txt, q);
    return 0;
}
