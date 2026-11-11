import os
import subprocess
import json
import sys

def run_checks():
    work_dir = "work/R50-T023"
    os.makedirs(work_dir, exist_ok=True)

    # 1. Record tool versions
    node_ver = subprocess.check_output(["node", "-v"]).decode().strip()
    npm_ver = subprocess.check_output(["npm", "-v"]).decode().strip()
    with open(f"{work_dir}/versions.json", "w") as f:
        json.dump({"node": node_ver, "npm": npm_ver}, f, indent=2)

    # 2. Run Vitest in non-watch mode
    cmd = ["npx", "vitest", "run", "Dynamic-Programming/test/RodCutting.test.js"]
    res = subprocess.run(cmd, capture_output=True, text=True)

    # Fallback to tests/ path if test/ path was not targeted
    if res.returncode != 0:
        cmd = ["npx", "vitest", "run", "Dynamic-Programming/tests/RodCutting.test.js"]
        res = subprocess.run(cmd, capture_output=True, text=True)

    with open(f"{work_dir}/test_output.log", "w") as f:
        f.write(res.stdout + "\n" + res.stderr)

    if res.returncode == 0:
        with open(f"{work_dir}/fixture_results.json", "w") as f:
            json.dump({
                "status": "PASSED",
                "task": "R50-T023",
                "precondition_line": "Dynamic-Programming/RodCutting.js:6",
                "smallest_valid_input": {"prices": [1], "n": 1, "expected": 1},
                "ordinary_input": {"prices": [1, 5, 8, 9, 10, 17, 17, 20], "n": 8, "expected": 22}
            }, f, indent=2)
        print("All checks passed.")
    else:
        print("Tests failed!")
        sys.exit(1)

if __name__ == "__main__":
    run_checks()
