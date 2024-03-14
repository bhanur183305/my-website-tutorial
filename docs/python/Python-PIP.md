---
sidebar_position: 36
---

PIP stands for "Package Installer for Python." It is a command-line tool used to install, upgrade, and manage Python packages from the Python Package Index (PyPI) and other package repositories. PyPI is a central repository that hosts thousands of third-party Python packages, providing a wide range of functionalities that extend the capabilities of Python.

With PIP, you can easily install external libraries and modules, making it convenient to include additional functionalities in your Python projects without having to write everything from scratch. These packages can range from data manipulation and scientific computing libraries to web frameworks, GUI tools, and much more.

---
# Python PIP

Some common commands you can use with PIP include:

1. **Installing a Package:**
   ```
   pip install package_name
   ```
   This command installs the specified package from PyPI or other repositories.

2. **Installing a Specific Version of a Package:**
   ```
   pip install package_name==version_number
   ```
   You can install a specific version of a package by specifying the version number after the package name.

3. **Upgrading a Package:**
   ```
   pip install --upgrade package_name
   ```
   This command upgrades an already installed package to the latest version available on PyPI.

4. **Uninstalling a Package:**
   ```
   pip uninstall package_name
   ```
   This command uninstalls the specified package from your Python environment.

5. **Listing Installed Packages:**
   ```
   pip list
   ```
   Use this command to get a list of all packages installed in your Python environment.

6. **Freezing Requirements:**
   ```
   pip freeze > requirements.txt
   ```
   This command creates a `requirements.txt` file containing a list of all installed packages and their versions. This file can be used to recreate the exact environment on another system.

PIP is included by default with Python versions 2.7.9 and later (Python 3.4 and later). For older Python versions, you might need to install PIP separately. PIP greatly simplifies the process of managing Python packages and has become an essential tool for Python developers.